/**
 * Created by qimengmeng on 16/12/26.
 */
var student=require('./student')
var teacher=require('./teacher')

function add(teacherName, students) {
    teacher.add(teacherName)

    students.forEach(function (item, index) {
        student.add(item)
    })
}

exports.add=add