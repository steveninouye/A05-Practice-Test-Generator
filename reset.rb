require 'csv'
require 'yaml'

tests = CSV.read('list.csv', headers: true, header_converters: :symbol, converters: :all)

categories = Hash.new { |h, k| h[k] = [] }

tests.each do |test|
  new_entry = {}
  new_entry[:name] = test[:name]
  new_entry[:problem_file] = test[:problemfile]
  new_entry[:spec_file] = test[:specfile]
  new_entry[:solution_file] = test[:solutionfile]
  new_entry[:num_uses] = 0
  categories[test[:category]] << new_entry
end

File.open("list.yml", "w+") { |f| f.write(categories.to_yaml) }
File.delete("solution.js") if File.exist?("solution.js")
File.delete("spec.js") if File.exist?("spec.js")
File.delete("practice_test.js") if File.exist?("practice_test.js")
