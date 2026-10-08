function isPrime(n) {
  // 1) تحقق أن المدخل رقم صحيح
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('Input must be an integer');
  }

  // 2) الأعداد الأقل من 2 ليست أولية
  if (n < 2) return false;

  // 3) جرّب القسمة حتى الجذر التربيعي
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  // 4) لم نجد أي قاسم، فالعدد أولي
  return true;
}

module.exports = isPrime;