import { Link } from "react-router-dom";

const RequestsPage = () => {
  return (
    <section>
      <h1>Requests page</h1>

      <Link to="/leave-requests/22">GO to request 22</Link>
    </section>
  );
};

export default RequestsPage;
