var pattern = "";
for (i = 5; i >= 1; i--) {
  pattern = pattern + "*";
  for (j = 1; j < i; j++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
