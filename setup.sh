#!/bin/bash

# UBUNTU CHAIN Setup Script
# "I am because we are."

set -e

ORANGE='\033[0;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${ORANGE}"
echo "  _   _ ____  _   _ _   _ _____ _   _ "
echo " | | | | __ )| | | | \ | |_   _| | | |"
echo " | | | |  _ \| | | |  \| | | | | | | |"
echo " | |_| | |_) | |_| | |\  | | | | |_| |"
echo "  \___/|____/ \___/|_| \_| |_|  \___/ "
echo "             C H A I N                "
echo -e "${NC}"

echo -e "${BLUE}[1/4] Verifying Directory Structure...${NC}"
mkdir -p programs/identity programs/score programs/lending programs/governance
mkdir -p oracle mobile sdk scripts docs
echo -e "${GREEN}✓ Folders verified.${NC}"

echo -e "${BLUE}[2/4] Installing Website Dependencies (app/)...${NC}"
cd app
npm install --silent
echo -e "${GREEN}✓ Website dependencies installed.${NC}"

echo -e "${BLUE}[3/4] Installing Video Demo Dependencies (video/)...${NC}"
cd ../video
npm install --silent
echo -e "${GREEN}✓ Video dependencies installed.${NC}"

echo -e "${BLUE}[4/4] Finalizing Branding Assets...${NC}"
cd ..
cp brand/*.svg app/public/ 2>/dev/null || true
echo -e "${GREEN}✓ Assets synchronized.${NC}"

echo -e "\n${ORANGE}UBUNTU CHAIN is ready!${NC}"
echo -e "To start the dashboard: ${BLUE}cd app && npm run dev${NC}"
echo -e "To preview the demo video: ${BLUE}cd video && npm start${NC}"
echo -e "\n${GREEN}I am because we are.${NC}"
