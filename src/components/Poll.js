// import React, { Component } from 'react'
// import { Col, Container } from 'react-bootstrap';
// import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom';
// import AnswerdQuestion from './AnswerdQuestion'
// import Question from './Question'


// export class Poll extends Component {
//   render() {
//     const { answerd, unAnswerd } = this.props;
//     return (
//       <div className="text-center">
//         <div>
//           <h2>Answerd Questions</h2>
//           <Container>
//             <Col md={{ offset: 3, span: 6 }}>
//               <AnswerdQuestion questions={answerd} />
//             </Col>
//           </Container>
//         </div>

//         <div>
//           <h2>Unasnwrd Questions</h2>
//           <Container>
//             <Col md={{ offset: 3, span: 6 }}>
//               <Question questions={unAnswerd}  />
//             </Col>
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }
// function mapStateToProps({ authedUser, users, questions }) {
//   const user = users[authedUser];
//   const answers = Object.keys(user.answers);
//   return {
//     answerd: Object.values(questions)
//       .filter((question) => answers.includes(question.id))
//       .sort((a, b) => b.timestamp - a.timestamp),
//     unAnswerd: Object.values(questions)
//       .filter((question) => !answers.includes(question.id))
//       .sort((a, b) => b.timestamp - a.timestamp),
//   }
// }
// export default connect(mapStateToProps)(Poll)
