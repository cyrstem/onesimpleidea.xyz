#!/bin/bash
#This is to build site on Github by coping the app folder and replace the content on docs files so the site can be public#
echo "# onesimpleidea publish#"
echo "# Que archivo o carpeta cambio"
read input_variable
cd docs
rm -r $input_variable
cd ..
cd app
echo "Remove  el archivo anterior"
echo "pasando tus huevadas"
cp -r $input_variable docs/$input_variable
echo "Done BIAtch done"

