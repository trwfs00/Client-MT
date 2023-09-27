import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

export default function convertTimestamp(props: any) {
  // Parse the timestamp string
  const timestamp = new Date(props.timestamp);

  // Calculate the time difference
//   const timeDifference = formatDistanceToNow(timestamp, { addSuffix: false, locale: th });
     const timeDifference = format(timestamp, 'MMMM dd, yyyy hh:mm:ss a',{locale: th});

  return (
    <div>
      <p>{timeDifference}</p>
    </div>
  );
}
