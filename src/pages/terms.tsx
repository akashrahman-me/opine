import Layout from "@/components/globals/Layout";
import Terms from "@/views/terms/Terms";
import React, {ReactElement} from "react";

function terms() {
  return (
    <div>
      <Terms />
    </div>
  );
}

export default terms;

terms.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
