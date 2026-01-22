#!/bin/bash

# Git Security Helper Script
# Prevents accidental commits of sensitive data

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🔒 Git Security Check${NC}"

# Check for sensitive files
check_sensitive_files() {
    echo "Checking for sensitive files..."
    
    # Files that should never be committed
    SENSITIVE_PATTERNS=(
        "*.env"
        "*.env.local"
        "*.env.production"
        "node_modules/"
        "*.log"
        "*.sqlite"
        "*.db"
        ".DS_Store"
    )
    
    for pattern in "${SENSITIVE_PATTERNS[@]}"; do
        if git ls-files | grep -q "$pattern" 2>/dev/null; then
            echo -e "${RED}❌ Found sensitive files matching: $pattern${NC}"
            git ls-files | grep "$pattern"
            return 1
        fi
    done
    
    echo -e "${GREEN}✅ No sensitive files found in git${NC}"
    return 0
}

# Check for secrets in staged files
check_secrets_in_staged() {
    echo "Checking staged files for secrets..."
    
    # Common secret patterns (but allow example files)
    SECRET_PATTERNS=(
        "mongodb.*://.*:.*@.*\.mongodb\.net"
        "jwt.*=.*[a-f0-9]{32,}"
    )
    
    staged_files=$(git diff --cached --name-only)
    
    if [ -z "$staged_files" ]; then
        echo -e "${YELLOW}⚠️  No files staged for commit${NC}"
        return 0
    fi
    
    for file in $staged_files; do
        if [ -f "$file" ]; then
            for pattern in "${SECRET_PATTERNS[@]}"; do
                if git diff --cached "$file" | grep -i "$pattern" >/dev/null 2>&1; then
                    echo -e "${RED}❌ Potential secret found in $file${NC}"
                    echo -e "${YELLOW}Pattern: $pattern${NC}"
                    return 1
                fi
            done
        fi
    done
    
    echo -e "${GREEN}✅ No secrets detected in staged files${NC}"
    return 0
}

# Main security check
security_check() {
    if ! check_sensitive_files; then
        echo -e "${RED}❌ Security check failed: Sensitive files detected${NC}"
        echo -e "${YELLOW}💡 Run: git rm --cached <file> to remove from git${NC}"
        exit 1
    fi
    
    if ! check_secrets_in_staged; then
        echo -e "${RED}❌ Security check failed: Potential secrets detected${NC}"
        echo -e "${YELLOW}💡 Review your changes and remove any secrets${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}🔒 Security check passed!${NC}"
}

# Safe commit function
safe_commit() {
    local message="$1"
    
    if [ -z "$message" ]; then
        echo -e "${RED}❌ Commit message required${NC}"
        echo "Usage: $0 commit \"Your commit message\""
        exit 1
    fi
    
    echo -e "${GREEN}🔍 Running security checks...${NC}"
    security_check
    
    echo -e "${GREEN}📝 Committing changes...${NC}"
    git commit -m "$message"
    
    echo -e "${GREEN}✅ Commit successful!${NC}"
}

# Safe push function
safe_push() {
    echo -e "${GREEN}🔍 Final security check before push...${NC}"
    security_check
    
    echo -e "${GREEN}🚀 Pushing to remote...${NC}"
    git push "$@"
    
    echo -e "${GREEN}✅ Push successful!${NC}"
}

# Command handling
case "$1" in
    "check")
        security_check
        ;;
    "commit")
        safe_commit "$2"
        ;;
    "push")
        shift
        safe_push "$@"
        ;;
    *)
        echo "Git Security Helper"
        echo ""
        echo "Usage: $0 {check|commit|push}"
        echo ""
        echo "Commands:"
        echo "  check                    - Run security checks"
        echo "  commit \"message\"         - Safe commit with security checks"
        echo "  push [options]           - Safe push with security checks"
        echo ""
        echo "Examples:"
        echo "  $0 check"
        echo "  $0 commit \"Add new feature\""
        echo "  $0 push origin main"
        ;;
esac