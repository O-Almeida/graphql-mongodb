import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudenType } from '../student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;
  @Field((type) => [StudenType])
  students: string[];
}
