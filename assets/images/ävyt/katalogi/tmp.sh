for file in *Äpy_*
do
   mv "$file" "${file/Äpy_/}"
done
