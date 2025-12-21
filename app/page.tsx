import ExploreBtn from '@/components/ExploreBtn';
import ReportCard from '@/components/ReportCard';
import { reports } from '@/lib/constants';
import React from 'react';

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        Report & Track Campus Issues <br /> for a Better University
      </h1>

      <p className="text-center mt-5">
        From infrastructure repairs to academic concerns - let&#39;s resolve
        campus challenges together
      </p>

      <ExploreBtn />

      <div
        className="mt-20 space-x-7"
        id="reports">
        <h3>Recent Reports</h3>

        <ul className="events">
          {reports.map((report) => (
            <li
              key={report.title}
              className="list-none">
              <ReportCard {...report} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
