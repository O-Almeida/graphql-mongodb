import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { createStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudenType } from './student.type';

@Resolver((of) => StudenType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query((returns) => StudenType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
  @Query((returns) => [StudenType])
  students() {
    return this.studentService.getAllStudents();
  }
  @Mutation((returns) => StudenType)
  createStudent(
    @Args('createStudentInput') createStudentInput: createStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
