#!/bin/bash
#This is to build site on Github by coping the app folder and replace the content on docs files so the site can be public#
echo "#---- onesimpleidea deploy----#"
echo "#wait... "
read input_variable 
rm -r docs/$input_variable
echo "Removing old"
cp -r app/$input_variable docs/
echo "Done BIAtch done"

