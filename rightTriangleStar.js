var pattern = "";
for (i = 1; i <= 5; i++){
    // pattern = pattern + "*";
    for (k = 0; k < 5 - i; k++){
        pattern = pattern + " ";
    }
    for (j = 1; j <= i; j++){
        pattern = pattern + "*";
    }
    pattern = pattern + "\n";
}

console.log(pattern);