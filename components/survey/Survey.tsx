/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Text } from '@mantine/core';
import { surveyData } from '@/utils/surveyData';
// import FormBuilder from '../formBuilder/FormBuilder';

const Survey = () => {
  // const ref = useRef(true);
  const [renderData, setRenderData] = useState(
    surveyData?.data?.data?.categories?.Introduction?.questionFlow
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log('🚀 ~ Survey ~ renderData:', renderData);
  // const onCheked = (e) => {
  //   console.log('🚀 ~ onCheked ~ e:', e);
  //   const result = renderData.map((item) => {
  //     console.log('🚀 ~ result ~ item:', item?.question?.choices);
  //     if (item?.question?.choices?.length > 0) {
  //       item?.question?.choices.map((c) => {
  //         console.log('🚀 ~ item?.question?.choices.map ~ c:', c);
  //         if (c.key === e.key) {
  //           return {
  //             ...item,
  //             checked: true,
  //           };
  //         }
  //         return item;
  //       });
  //     }
  //   });
  //   console.log('🚀 ~ onCheked ~ result:', result);
  //   console.log('🚀 ~ onCheked ~ e:', e);
  // };
  // //   <div dangerouslySetInnerHTML={{ __html: item.question.help_text }} />;
  // useEffect(() => {
  //   // ref.current &&
  //   // setRenderData((pre) => [
  //   //   surveyData?.data?.data?.categories?.Introduction?.questionFlow,
  //   // ]);
  //   // ref.current = false;
  // }, []);
  // return (
  //   <Box
  //     sx={{ Width: 120, minHeight: 100 }}
  //     display="flex"
  //     flexDirection="column"
  //     alignItems="center"
  //     m={10}
  //     width="50%"
  //   >
  //     {[renderData[currentIndex]].map((item, ind) => (
  //       <>
  //         <Box key={ind} width="80%">
  //           <Typography variant="h5" gutterBottom>
  //             {item?.question?.question}
  //           </Typography>
  //           <div dangerouslySetInnerHTML={{ __html: item?.question?.sub_text }} />
  //           <Box
  //             display="flex"
  //             flexDirection="row"
  //             justifyContent="flex-start"
  //             alignItems="center"
  //             flexWrap="wrap"
  //             gap={2}
  //             mt={2}
  //             mb={2}
  //             // bgcolor={"pink"}
  //           >
  //             <FormBuilder item={item?.question} />
  //           </Box>
  //           <Box
  //             marginTop={2}
  //             display="flex"
  //             justifyContent={currentIndex > 0 ? 'space-between' : 'flex-end'}
  //           >
  //             {currentIndex > 0 && (
  //               <Button
  //                 component="label"
  //                 variant="contained"
  //                 onClick={() => {
  //                   currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  //                 }}
  //               >
  //                 Back
  //               </Button>
  //             )}
  //             <Button
  //               component="label"
  //               variant="contained"
  //               onClick={() => {
  //                 currentIndex < renderData.length - 1 && setCurrentIndex(currentIndex + 1);
  //               }}
  //             >
  //               Next
  //             </Button>
  //           </Box>
  //         </Box>
  //       </>
  //     ))}
  //   </Box>
  // );

  useEffect(() => {
    // ref.current &&
    // setRenderData((pre) => [
    //   surveyData?.data?.data?.categories?.Introduction?.questionFlow,
    // ]);
    // ref.current = false;
  }, []);
  return (
    <>
      <Box
        // sx={{ Width: 120, minHeight: 100 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        m={10}
        w="50%"
      >
        {[renderData[currentIndex]].map((item, ind) => (
          <>
            <Box key={ind} w="80%">
              <Text size="lg">{item?.question?.question}</Text>
              <div dangerouslySetInnerHTML={{ __html: item?.question?.sub_text }} />
              <Box
                display="flex"
                mt={2}
                mb={2}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
                // bgcolor={"pink"}
              >
                {/* <FormBuilder item={item?.question} /> */}
              </Box>
              <Box
                mt={2}
                style={{
                  display: 'flex',
                  justifyContent: currentIndex > 0 ? 'space-between' : 'flex-end',
                }}
                // display="flex"
                // justifyContent={currentIndex > 0 ? 'space-between' : 'flex-end'}
              >
                {currentIndex > 0 && (
                  <Button
                    // component="label"
                    // variant="contained"
                    onClick={() => {
                      currentIndex > 0 && setCurrentIndex(currentIndex - 1);
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  // component="label"
                  // variant="contained"
                  onClick={() => {
                    currentIndex < renderData.length - 1 && setCurrentIndex(currentIndex + 1);
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default Survey;
