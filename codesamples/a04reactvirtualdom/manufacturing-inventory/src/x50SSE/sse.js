import React, { useEffect, useState } from 'react';

const MachineStatus = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const eventSource = new 
    EventSource('http://localhost:8000/events');
    eventSource.onmessage = (event) => {
        
      setStatus(JSON.parse(event.data).status);
    };

    return () => {

      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Machine Status</h1>
      <p>{status ? `Current Status: ${status}` : 'Waiting for updates...'}</p>
    </div>
  );
};

export default MachineStatus;


/*

. Communication Model
Webhooks:

Request-Response Model: Webhooks are typically one-way HTTP callbacks triggered by events. When a specific event occurs on the server (e.g., a new user registration), the server makes an HTTP POST request to a predefined URL (the webhook URL) specified by the client.
The client receives this request and processes the data.
SSE:

Streaming Model: SSE provides a continuous stream of updates from the server to the client. The client establishes a persistent connection to the server and listens for incoming messages. The server can send multiple messages over this single connection.
2. Direction of Communication
Webhooks:

Unidirectional: Data flows from the server to the client. The client does not send data back to the server as part of the webhook event.
SSE:

Unidirectional: Similar to webhooks, data flows from the server to the client. However, SSE allows for multiple messages to be sent over a single connection.
3. Connection Type
Webhooks:

Each webhook event results in a new HTTP request from the server to the client. There is no persistent connection; each interaction is independent.
SSE:

Uses a single persistent connection (HTTP) that remains open for continuous data transmission. This allows for efficient and real-time updates without the overhead of establishing new connections.
4. Use Cases
Webhooks:

Best suited for scenarios where the client needs to be notified of discrete events, such as payment notifications, new data entries, or updates from a third-party service.
Examples: GitHub webhooks for repository events, payment gateway notifications.
SSE:

Ideal for applications that require continuous updates from the server, such as live notifications, real-time feeds, or streaming data.
Examples: Live sports scores, stock price updates, chat applications.
5. Error Handling and Retries
Webhooks:

Typically require the client to handle retries and failures. If the client cannot process a webhook request (e.g., due to downtime), it may miss that event unless implemented with retry logic.
SSE:

The server can automatically attempt to reconnect if the connection drops. The client can also implement reconnection logic to handle disconnections.
6. Complexity
Webhooks:

Usually simpler to implement on the server side, as it just involves sending an HTTP request when an event occurs.
SSE:

Requires setting up a server endpoint that can manage persistent connections and stream data, which can be more complex but allows for richer interactions.
Summary
Choose Webhooks when you need to notify a client of discrete events without the need for a persistent connection.
Choose SSE when you require real-time, continuous updates over a persistent connection for scenarios like live notifications or streaming data.


*/