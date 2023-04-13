import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import {
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "@src/interface/forms";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const [requisitionData, setRequisitionData] = useState<IRequisitionDetails>({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });
  const [jobDetailData, setJobDetailData] = useState<IJobDetails>({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  });
  const [interviewData, setInterviewData] = useState<IInterViewSettings>({
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  });

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm
                  handleTab={handlePage}
                  setRequisitionData={setRequisitionData}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm
                  handleTab={handlePage}
                  setJobDetailData={setJobDetailData}
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm
                  handleTab={handlePage}
                  setInterviewData={setInterviewData}
                />
              </TabPanel>
            </TabPanels>
            <DisplayCard
              requisitionDetails={requisitionData}
              jobDetails={jobDetailData}
              interviewSettings={interviewData}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
