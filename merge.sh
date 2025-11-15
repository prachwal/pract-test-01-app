#!/bin/bash

# Skrypt do scalania kodu z folderu src do jednego pliku w ./tmp
# Scala tylko pliki śledzone przez git

mkdir -p ./tmp

output_file="./tmp/merged_code.txt"

# Wyczyść plik wyjściowy
> "$output_file"

# Znajdź wszystkie pliki śledzone przez git w src z rozszerzeniami .tsx, .ts, .scss, .css
git ls-files src/ | grep -E '\.(tsx|ts|scss|css)$' | sort | while read -r file; do
  echo "=== $file ===" >> "$output_file"
  cat "$file" >> "$output_file"
  echo "" >> "$output_file"
  echo "" >> "$output_file"
done

echo "Kod został scalony do $output_file"