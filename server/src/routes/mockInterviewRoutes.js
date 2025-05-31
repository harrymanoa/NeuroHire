const express = require('express');
const { mockInterviewController } = require('../controllers');

const mockInterviewRouter = express.Router();

mockInterviewRouter.get('/all', mockInterviewController.getAllMockInterviews);
mockInterviewRouter.get('/:id', mockInterviewController.getMockInterviewById);
mockInterviewRouter.get(
  '/:id/questions',
  mockInterviewController.getMockInterviewQuestions
);
mockInterviewRouter.post(
  '/create',
  mockInterviewController.createMockInterview
);
mockInterviewRouter.put(
  '/update/:id',
  mockInterviewController.editMockInterview
);
mockInterviewRouter.delete(
  '/delete/:id',
  mockInterviewController.deleteMockInterview
);

module.exports = mockInterviewRouter;
