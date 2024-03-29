import {StyledTitle, StyledCalendar, StyledMonth, StyledPdf} from './styled';
import {message} from 'antd';

import moment from 'moment';
import PDFIcon from 'assets/icons/pdf-icon.png';
import IconImage from 'components/IconImage';

export const columns = () => [
  {
    key: '2',
    title: (
      <>
        <StyledCalendar>Training Calendars</StyledCalendar>
        <StyledTitle>Month/Date</StyledTitle>
      </>
    ),
    dataIndex: 'month',
    render: (_a, b) => {
      return (
        <>
          {(b?.schedules || []).map((item) => {
            const startDay = moment(item?.date).format('DD');
            const addDays = moment(item?.date)
              .add(item?.range, 'days')
              .format('DD');

            return (
              <StyledMonth>
                {startDay}
                {startDay !== addDays && ` - ${addDays}`}{' '}
                {moment(item?.date).format('MMMM')}
              </StyledMonth>
            );
          })}
        </>
      );
    },
  },
  {
    key: '3',
    title: (
      <>
        <StyledCalendar>&nbsp;</StyledCalendar>
        <StyledTitle>PDF</StyledTitle>
      </>
    ),
    dataIndex: 'file_name',
    render: (_a, b) => {
      const download = () => {
        if (b?.file) {
          window.open(b?.file);
        } else {
          message.error('Schedule Training file could not open!');
        }
      };

      return (
        <>
          <IconImage source={PDFIcon} height={20} width={15} /> &nbsp;
          <StyledPdf onClick={download}>{b?.fileDisplayName || ''}</StyledPdf>
        </>
      );
    },
  },
];
