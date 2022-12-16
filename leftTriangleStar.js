var pattern = "";
for (i = 1; i <= 5; i++) {
  pattern = pattern + "*";
  for (j = 1; j < i; j++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
