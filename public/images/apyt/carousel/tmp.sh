for file in *_lehti*
do
  echo "$file"
  mv "$file" "${file/_lehti/_2}"
done