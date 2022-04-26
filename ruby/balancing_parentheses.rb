def balancing_parentheses(string)
  arr = string.split('')
  count = 0
  arr.map{|i|
  if i == '('
    count-=1
  elsif i == ')'
    count+=1
  end
}
  count
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
