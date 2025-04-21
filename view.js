// Factorielle
function factorielle(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorielle(n - 1);
}

// Vérification des nombres premiers
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Suite de Fibonacci
function fibonacci(n) {
  const suite = [0, 1];
  for (let i = 2; i < n; i++) {
    suite.push(suite[i - 1] + suite[i - 2]);
  }
  return suite.slice(0, n);
}
