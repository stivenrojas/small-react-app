#!/usr/bin/env bash

MAIN_BRANCH="main"
CHANGED_FILES=$(git diff $MAIN_BRANCH --name-only --diff-filter=ACMR | grep ".jsx\{0,1\}$")

if [[ "$CHANGED_FILES" = "" ]]
then
  echo -e "\nNo changed files found that require linting"
  exit 0
fi

PASS=true

echo -e "\nValidating Javascript and auto-fixing where possible:\n"

# Check for eslint
which eslint &> /dev/null
if [[ "$?" == 1 ]]
then
  echo -e "\t\033[41mPlease install ESlint\033[0m"
  exit 1
fi

for FILE in $CHANGED_FILES
do
  eslint "$FILE" --fix

  if [[ "$?" == 0 ]]
  then
    echo -e "\t\033[32mESLint Passed: $FILE\033[0m"
  else
    echo -e "\t\033[41mESLint Failed: $FILE\033[0m"
    PASS=false
  fi
done

echo -e "\nJavascript validation completed!\n"

if ! $PASS
then
  echo -e "\033[41mLINTING FAILED:\033[0m Please fix ESLint errors.\n"
  exit 1
else
  echo -e "🎉 🎉 🎉 LINTING SUCCEEDED 🎉 🎉 🎉\n"
fi

exit $?
