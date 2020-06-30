list = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'} ]
array = []
result = ""

list.each_with_index do |hash|
  array.push(hash[:name])
end

array.each_with_index do |name, index|
  if index == (array.length -1)
    results <<"& " + name
  else
    result << name + ", "
  end
end
  puts result