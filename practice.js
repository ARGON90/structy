def uncompress(s):
  nums = '0123456789'
  res = ''

  for char in s:
    i = 0
    if char in nums:
      print(int(char))

  return res

print(uncompress("2c3a1t")) # -> 'ccaaat'
