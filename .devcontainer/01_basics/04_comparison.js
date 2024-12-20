// null > 0 => false; null == 0 => false; null >= 0 => true
// Reason is that an equality check == and comparisons > < >= <= works differentlt.Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true & (1) null > 0 false
