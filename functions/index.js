const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello, Abhi! How are you.", { structuredData: true });
  response.send("Hello, Abhi! How are you.")
});

exports.creatNotification = (notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notification added', doc))
})

exports.projectCreated = functions.firebase
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.autherFirstName} ${project.autherLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return this.creatNotification(notification)

  })

exports.joinedUser = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return this.creatNotification(notification)

      })

  })