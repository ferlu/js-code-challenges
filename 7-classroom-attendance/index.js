let classroom = {
	hasTeachingAssistant: true,
	classList: ['Rashida', 'John', 'Thomas', 'Lisa', 'Omair', 'Lukas'],
};

function getStudents(classroom) {
	let { hasTeachingAssistant, classList } = classroom;
	let teacher, teachingAssistant, students;

	if (hasTeachingAssistant) {
		[teacher, ta, ...students] = classList;
	} else {
		[teacher, ...students] = classList;
	}
	return students;
}

console.log(getStudents(classroom));
