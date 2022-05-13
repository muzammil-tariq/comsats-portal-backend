import { StudentGroup } from "../../models";
import { IStudentGroup } from "../../types";
import { NotFound } from "../../utils/errors";

export const IsGroupExist = async (id: string) => {
  const group: IStudentGroup | null = await StudentGroup.findById(id).exec();
  return !!group;
};
export const create = async (obj: any) => {
  const group: IStudentGroup | null = await StudentGroup.create(obj);
  if (!group) {
    throw new NotFound(`Student Group is not created!`);
  }
  return group;
};
export const getGroup = async (id: string) => {
  const group: IStudentGroup | null = await StudentGroup.findById(id).exec();
  if (!group) {
    throw new NotFound(`Student Group with id ${id} not found!`);
  }
  return group;
};

export const getAllGroups = async () => {
  const groups: IStudentGroup[] | null = await StudentGroup.find({}).exec();
  if (!groups) {
    throw new NotFound(`No Student Groups found!`);
  }
  return groups;
};

export const updateGroup = async (id: string, obj: any) => {
  const group: IStudentGroup | null = await StudentGroup.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!group) {
    throw new NotFound(`Student Group with id ${id} not found!`);
  }
  return group;
};

export const deleteGroup = async (id: string) => {
  const groupExists: boolean = await IsGroupExist(id);
  if (!groupExists) {
    throw new NotFound(`Student Group with id ${id} not found!`);
  }
  await StudentGroup.findByIdAndDelete(id).exec();
};
// {
//   _id: 1,
//   name: 'John Smith',
//   items: [{
//      id: 1,
//      name: 'item 1',
//      value: 'one'
//   },{
//      id: 2,
//      name: 'item 2',
//      value: 'two'
//   }]
// }
// {'$set':  {'items.$.name': update.name , 'items.$.value': update.value}}
// UserModel.findOneAndUpdate({_id: 1, notifications: {$elemMatch: {id: 2}}},
//   {$set: {'notifications.$.title': req.body.title,
//           'notifications.$.body': req.body.body,}}, // list fields you like to change
//   {'new': true, 'safe': true, 'upsert': true});
// const query = { name: "Steve Lobsters" };
//     const updateDocument = {
//       $push: { "items.$[orderItem].toppings": "garlic" }
//     };
//     const options = {
//       arrayFilters: [{
//         "orderItem.type": "pizza",
//         "orderItem.size": "large",
//       }]
//     };
// db.demo553.findOneAndUpdate(
//   ...    { id:101,
//   ...       "midExamDetails.SubjectName":"MongoDB"
//   ...    },
//   ...    { $set:{
//   ...       'midExamDetails.$.Marks': 97
//   ...    }
//   ... }
//   ... );
// updateOne(
//   { "_id": req.params.id },
//   {
//     "$push": {
//       "workRating": {
//         "reviewerName": reviewerName,
//         "critique": critique,
//         "date": new Date()
//       },
//       "ratingNumber": req.body.clickedValue
//     },
//     "$inc": {
//       "ratingSum": req.body.clickedValue
//     }
//   },
// var update = {name: 'updated item2', value: 'two updated'};
// Person.update({'items.id': 2}, {'$set':  {'items.$': update}}, function(err) { ...

// invite to group
// request received
// join group -> request sent
export const joinGroup = async (id: string, studentId: any) => {
  const groupExists = await IsGroupExist(id);
  if (!groupExists)
    throw new NotFound(`Student Group with id ${id} not found!`);
  // const group = await StudentGroup.findByIdAndUpdate(id, {
  //   $push: {
  //     "students": studentId,
  //   },
  // }).exec();
  // const student={student:studentId}
  // const group = await StudentGroup.findByIdAndUpdate(id, {
  //   $push: {
  //     "requests": student,
  //   },
  // }).exec();
  // await StudentGroup.updateOne({_id:id}, {
  //   $set: {
  //     "requests.$.student": studentId
  //   },
  // }).exec();
  // { $set: { "grades.$.std" : 6 } }

  // { $set:{
  //   ...       'midExamDetails.$.Marks': 97
  //   ...    }
  // await StudentGroup.updateOne(
  //   { _id: id },
  //   {
  //     $push: {
  //       students: studentId,
  //     },
  //   }
  // ).exec();
  // db.students.updateOne( { _id: 3 }, [ { $set: { "test3": 98, modified: "$$NOW"} } ] )
  //   { $push: {"myarray": {
  //     userId:ObjectId("570ca5e48dbe673802c2d035"),
  //     point: 10
  // }}
  // const group = await StudentGroup.findOneAndUpdate({_id:id,"requests._id":"61b9a13ecf1b30d89e65a67b"},
  //    {$set: {"requests.$.status": "accept"}}).exec();
    //  test:PRIMARY> db.coll.update({userID:1, "solutions.textID":2}, 
    //  {$set: {"solutions.$.solution": "the new text"}})

  // const group = await StudentGroup.findByIdAndUpdate(id, {
  //   $push: { "requests": { "student": studentId,"status":"pending" } },
  // }).exec();
//   { $push: {"myarray": {
//     userId:ObjectId("570ca5e48dbe673802c2d035"),
//     point: 10
// }}
// test:PRIMARY> db.coll.update({userID:1, "solutions.textID":2}, 
// {$set: {"solutions.$.solution": "the new text"}})
// .update({userID:1, "solutions.textID":2}, 
// {$set: {"solutions.$.solution": "the new text"}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  // return group;
 await StudentGroup.updateOne(
    {_id:id,"requests.student":"61b06096c7b65cfb9161f5a9"},
  {$set: {"requests.$.status": "accept"}})
//   db.students.updateOne(
//     { _id: 4, "grades.grade": 85 },
//     { $set: { "grades.$.std" : 6 } }
//  )
  const group=await StudentGroup.findById(id)
  return group
};
