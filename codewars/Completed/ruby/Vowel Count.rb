


def getCount(inputStr)
  vogals = ["a", "e", "i", "o", "u"]
  count = 0
  inputStr.chars.each do |letter|
    if vogals.include? letter
      count += 1
    end
  end
  count
end
