import { TYPES } from './actionTypes';

const INITIAL_STATE = {
  data: [],
  myCourses: [],
  ongoingCourses: [],
  completedCourses: [],
  error: true,
  loading: false,
  curriculum: [],
  curriculumDetails: {},
  reviews: [],
  lessons: {
    data: [],
    loading: false,
  },
  contents: {
    data: [],
    loading: false,
  },
  lessonDetails: {
    data: {},
    loading: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_COURSES_LIST_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
        data: [],
        myCourses: [],
        ongoingCourses: [],
        completedCourses: [],
      };

    case TYPES.GET_COURSES_LIST_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.payload.data,
        myCourses: action.payload.myCourses,
        ongoingCourses: action.payload.ongoingCourses,
        completedCourses: action.payload.completedCourses,
      };

    case TYPES.GET_COURSES_LIST_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
        data: [],
        myCourses: [],
        ongoingCourses: [],
        completedCourses: [],
      };

    case TYPES.GET_COURSES_CURICULUM_SUCCESS:
      return {
        ...state,
        curriculum: action.payload,
      };

    case TYPES.GET_CURICULUM_DETAILS_SUCCESS:
      return {
        ...state,
        curriculumDetails: action.payload,
      };

    /**
     * REDUCER REVIEWS
     * */

    case TYPES.GET_REVIEW_LIST_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };

    case TYPES.GET_REVIEW_LIST_FAILED:
      return {
        ...state,
        reviews: [],
      };

    /**
     * LESSON REDUCER
     * */
    case TYPES.GET_LESSONS_LIST_REQUEST:
      return {
        ...state,
        lesson: {
          data: [],
          loading: true,
        },
      };

    case TYPES.GET_LESSONS_LIST_SUCCESS:
      return {
        ...state,
        lesson: {
          data: action.payload,
          loading: false,
        },
      };

    case TYPES.GET_LESSONS_LIST_FAILED:
      return {
        ...state,
        lesson: {
          data: [],
          loading: false,
        },
      };

    /**
     * TOPIC DETAILS REDUCER
     * */
    case TYPES.GET_DETAILS_LESSONS_LIST_REQUEST:
      return {
        ...state,
        lessonDetails: {
          data: {},
          loading: true,
        },
      };

    case TYPES.GET_DETAILS_LESSONS_LIST_SUCCESS:
      return {
        ...state,
        lessonDetails: {
          data: action.payload,
          loading: false,
        },
      };

    case TYPES.GET_DETAILS_LESSONS_LIST_FAILED:
      return {
        ...state,
        lessonDetails: {
          data: {},
          loading: false,
        },
      };

    /**
     * CONTENTS  REDUCER
     * */
    case TYPES.GET_CONTENTS_LIST_REQUEST:
      return {
        ...state,
        contents: {
          data: [],
          loading: true,
        },
      };

    case TYPES.GET_CONTENTS_LIST_SUCCESS:
      return {
        ...state,
        contents: {
          data: action.payload,
          loading: false,
        },
      };

    case TYPES.GET_CONTENTS_LIST_FAILED:
      return {
        ...state,
        contents: {
          data: [],
          loading: false,
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
