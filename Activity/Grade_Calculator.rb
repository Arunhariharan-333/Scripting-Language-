class GradeCalculator
  def initialize
    @subjects = []
    @marks = []
  end

  def add_subject
    print "Enter subject name: "
    @subjects << gets.strip
    print "Enter marks obtained: "
    @marks << gets.to_i
  end

  def calculate_grade(marks)
    case marks
    when 90..100 then 'A+'
    when 80..89  then 'A'
    when 70..79  then 'B+'
    when 60..69  then 'B'
    when 50..59  then 'C'
    else 'F'
    end
  end

  def display_report
    puts "\nStudent Report Card:"
    total = 0
    @subjects.each_with_index do |subject, i|
      grade = calculate_grade(@marks[i])
      total += @marks[i]
      puts "#{subject}: #{@marks[i]} - Grade: #{grade}"
    end
    average = total / @subjects.size.to_f
    puts "Average Marks: #{average.round(2)}"
    puts "Overall Grade: #{calculate_grade(average)}"
  end

  def run
    puts "Welcome to Grade Calculator!"
    print "Enter number of subjects: "
    n = gets.to_i
    n.times { add_subject }
    display_report
  end
end

calculator = GradeCalculator.new
calculator.run
