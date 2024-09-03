import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useTheme, useMediaQuery, IconButton, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Faqs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  const handleChange1 = (panel) => (event, isExpanded1) => {
    setExpanded1(isExpanded1 ? panel : false);
  };

  const handleChange2 = (panel) => (event, isExpanded2) => {
    setExpanded2(isExpanded2 ? panel : false);
  };

   const faqsData1 =[{
    question: " Do You Provide Customised Boxes for Luxury Businesses?",
    answer: "Yes, we offer a wide range of customized boxes tailored to meet the needs of luxury businesses."
  },
  {
    question: "Do you provide any free samples for custom packaging?",
    answer: "We offer free samples for certain types of custom packaging to help you visualize the final product."
  },
  {
    question: "What is the standard delivery time for custom boxes?",
    answer: " Our standard delivery time for custom boxes varies depending on the order quantity and complexity."
  },
  {
    question: "What if I have a design idea but no artwork for packaging?",
    answer: "Our design team can help you bring your packaging idea to life, even if you don't have artwork ready."
  },
  
]

const faqsData2 =[{
    question: "What's the best eco-friendly material for custom packaging?",
    answer: "We offer a variety of eco-friendly materials for custom packaging, including recycled cardboard, kraft paper, and biodegradable materials."
  },
  {
    question: "What is your shipping fee for boxes with logos?",
    answer: "Our shipping fees for boxes with logos depend on the shipment's size, weight, and destination."
  },
  {
    question: "Is there any minimum order requirement for custom boxes?",
    answer: "We have a minimum order quantity of 500 for custom boxes to ensure efficiency and cost-effectiveness."
  },
  {
    question: "What sizes and shapes of custom packaging can you provide?",
    answer: "We can create custom boxes in various sizes and shapes to fit your specific product requirements."
  },
  
]


  return (
    <>
    <Box marginTop={'3rem'}>
        <Typography sx={{
            fontSize:isSmall ?  "1.5rem" : isMedium ?  "2rem" : '2.5rem',
            fontWeight:'600', color:'black',
            textAlign:'center', marginBottom:'1rem'
        }}>
        Frequently Asked Questions
        </Typography>
    </Box>

    <Box padding={'0% 5%'}>
        <Grid container spacing={ isMedium ? 0 : 2} >
            <Grid item lg={6} md={6} sm={12} xs={12} >
            <Box sx={{   color: 'black' }}>
      {/* <Typography variant="h4" sx={{ marginBottom: '2rem', color: theme.palette.primary.main }}>
        Frequently Asked Questions
      </Typography> */}
      {faqsData1.map((faq, index) => (
        <Accordion
          key={index}
          expanded1={expanded1 === index}
          onChange={handleChange1(index)}
          sx={{
            backgroundColor: '#ebebeb',
            color: 'white',
            marginBottom: '1rem', 
            border:'none',
            borderRadius:'5px',
            padding:'.5rem', 
            // height:'4rem'
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton>
                {expanded1 === index ? <CloseIcon sx={{ color: 'black' }} /> : <AddIcon sx={{ color: 'black' }} />}
              </IconButton>
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{ color: expanded1 === index ? theme.palette.primary.main : 'black' }}
          >
            <Typography  sx={{
              fontSize:isSmall? '1rem' : '1.2rem',
            //   fontFamily:'Montserrat',
              fontWeight:400,
            }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'black', }}>
            <Typography sx={{
               fontSize:'1rem', fontWeight:'400'
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} >
            <Box sx={{   color: 'black' }}>
      {/* <Typography variant="h4" sx={{ marginBottom: '2rem', color: theme.palette.primary.main }}>
        Frequently Asked Questions
      </Typography> */}
      {faqsData2.map((faq, index) => (
        <Accordion
          key={index}
          expanded2={expanded2 === index}
          onChange={handleChange2(index)}
          sx={{
            backgroundColor: '#ebebeb',
            color: 'white',
            marginBottom: '1rem', 
            border:'none',
            borderRadius:'5px',
            padding:'.5rem',
            // height:'4rem'
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton>
                {expanded2 === index ? <CloseIcon sx={{ color: 'black' }} /> : <AddIcon sx={{ color: 'black' }} />}
              </IconButton>
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{ color: expanded2 === index ? theme.palette.primary.main : 'black' }}
          >
            <Typography  sx={{
              fontSize:isSmall? '1rem' : '1.2rem',
            //   fontFamily:'Montserrat',
              fontWeight:400,
            }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'black', }}>
            <Typography sx={{
               fontSize:'1rem', fontWeight:'400'
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
            </Grid>
        </Grid>
    </Box>
    </>
  );
};

export default Faqs;
