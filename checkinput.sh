#!/usr/bin/env bash

list=./howard
json=~/src/howard-www/js/howard.json

sed '/^%$/d;/Integrity and Fear/,/Asking questions in order to find better questions/d' $list | LC_ALL=C sort -df >hlist

{ grep '"title":' $json | grep -v '"All the great shows…"' | sed 's/, "topic":.*}/}/'; grep -v '"title":' $json; } | sed 's/		*{".*: "//;/^{"/d;/\]}/d;s/" *},*$//;s/\\"/"/g' | LC_ALL=C sort -df >hjson

sed '/^%$/d;/Integrity and Fear/,/Asking questions in order to find better questions/!d' $list | LC_ALL=C sort -df >list-topics

grep '"topic":' $json | sed 's/		*{".*: "//;/^{"/d;/\]}/d;s/" *},*$//;s/\\"/"/g' | LC_ALL=C sort -df >json-topics

if diff -q hlist hjson; then
	rm -f hlist hjson
else
	diff hlist hjson
fi

if diff -q list-topics json-topics; then
	rm -f list-topics json-topics
else
	diff list-topics json-topics
fi

# diff exits with 0 for no difference, or 1 if there is a difference

exit
