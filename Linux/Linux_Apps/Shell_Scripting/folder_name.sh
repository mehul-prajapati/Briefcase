#!/bin/bash
PARENT_DIR=$HOME/Mehul_Einfochips/My_Programs/ei_Intel/llapi_linux/llapi/source/*
###################################################
# Entering into directory
###################################################
for DIR in $PARENT_DIR
do
	echo "====================================="
	echo $DIR

	###################################################
	# Entering into sub-directory
	###################################################
	for SUBDIR in $DIR/*
	do
		echo "====================================="
		echo $SUBDIR
	done
done