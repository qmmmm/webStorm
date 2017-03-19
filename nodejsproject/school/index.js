/**
 * Created by qimengmeng on 16/12/26.
 */
var klass=require('./klass')

exports.add=function (klasses) {
    klass.forEach(function (item, index) {
        var _klass=item
        var teacherName=item.teacherName
        var students=item.students

        klass.add(teacherName,students)
    })


}

