def generateHashtag(str)
  return false  if str.empty? || str.length > 140
else
  # < 140 char
  newArr = str.split(' ')
  finalArr = ['#']
  newArr.each do |word|
    finalArr << word.capitalize
  end
end
return finalArr.join('')