#!/bin/bash

## define image directory
# DIR=./public/media/projects
DIR=./images

## define image sizes
sizes=(180 270 360)
# sizes=(700 1050 1400)

## imagemagick function
## convert $1(image) $2(width) $3(newname)
resize() {
  convert -quality 90 -verbose $1 -thumbnail $2 $3
}

## find all images
for image in $(find ${DIR} -iregex ".*\.\(jpg\|gif\|png\|jpeg\)");
do
  ## get image width
  width=`convert $image -ping -format "%w" info:`

  ## get image path and name
  dir=$(dirname "$image")
  filename=$(basename "$image")
  extension="${filename##*.}"
  filename="${filename%.*}"

  ## set new image name
  newname="$dir"/"$filename"-"$width"w."$extension"

  ## resize image with original width
  resize "$image" $width "$newname"

  ## run through image sizes
  for size in ${sizes[@]}; do

    ## set new image name
    newname="$dir"/"$filename"-"$size"w."$extension"

    ## resize image with define widths
    resize "$image" $size "$newname"

  done
done