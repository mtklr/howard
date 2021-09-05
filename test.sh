#!/usr/bin/env bash

echo "strfile howard:"
strfile howard

echo
echo 'fortune:'
fortune .
fortune .
fortune .

echo
echo 'latest title:'
head -n1 howard

echo
echo 'checking input script (no output if ok)...'
./checkinput.sh

echo
echo '*** update howard-www'

exit
