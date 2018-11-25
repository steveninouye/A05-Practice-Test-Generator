require 'csv'
require 'yaml'
require 'colorize'
require 'byebug'
# Instructions
system("clear")
puts "Welcome to Mallory's a/A Practice Assessment Generator".cyan
puts "This generator will create a practice test based on your input. " \
      "You can choose how many problems from each category to include in your test. "
puts "This program will generate 3 files in this folder: practice_test, spec, and solution. " \
      "Complete the practice_test file, running the spec file to check your answers. " \
      "When your time is up (you are timing yourself, right?), compare your answers to the solutions."
puts "Good luck!"

# read in yaml with test info
tests = YAML.load(File.read("list.yml"))

# list category options
puts "\nCategories/Completed:"
tests.each do |category, problems|
  completed = problems.count { |problem| problem[:num_uses] > 0 }
  puts "#{category} => #{completed}/#{problems.size}"
end
# puts "Possible categories: #{tests.keys.join(", ")}".magenta
# get user requests
puts "\nInput your requests, separated by commas and spaces please"
puts "Example input: " + "array: 2, recursion: 1, sort: 1".yellow
input = gets.gsub(/\s/, '').split(",")
categoryrequests = Hash.new(0)
input.each do |request|
  req = request.downcase.split(":")
  categoryrequests[req[0]] = req[1].to_i
end


# compile problem list into master,
# giving preference to problems
# that have been attempted fewer times
master = []

categoryrequests.each do |category, num_problems|
  category_problems = tests[category]
  grouped_by_uses = category_problems.group_by { |problem| problem[:num_uses] }
                                     .sort_by { |num_uses, _| num_uses }

  from_category = []
  grouped_by_uses.each do |_, problem_group|
    break if num_problems <= 0
    to_add = problem_group.sample(num_problems)
    from_category += to_add
    num_problems -= to_add.size
  end

  if num_problems > 0
    puts "There aren't enough problems for #{category}!"
    puts "Enter 'c' to continue, anything else to abort"
    ans = gets.chomp.downcase
    exit unless ans == 'c'
  end

  from_category.each { |problem| problem[:num_uses] += 1 }
  master += from_category
end

practice_test = File.open("practice_test.js", "w")
spec = File.open("spec.js", "w")
solution = File.open("solution.js", "w")

# loop through master tests and add text to the new files
master.each do |test|
  practice_test << File.read(test[:problem_file]) << "\n"
  spec << File.read(test[:spec_file]) << "\n"
  solution << File.read(test[:solution_file]) << "\n"
end

# close the files that were just created
practice_test.close
spec.close
solution.close

File.open("list.yml", "w+") { |f| f.write(tests.to_yaml)}

puts
puts "Done!"
