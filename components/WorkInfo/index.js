import Link from 'next/link';
import {
  Background,
  Card,
  Title,
  LinkTo,
  Grid,
  WorkContainer,
  WorkImage,
  WorkItem,
  WorkDescription,
  Contact,
  ContactBtn,
} from './work.js';

import work from './WorkData.js';

const WorkInfo = () => {
  const data = work.map((el) => {
    const id = el.id;
    const title = el.title;
    const description = el.description;
    const link = el.link;
    const image = el.image;

    return { id, title, description, link, image };
  });
  // console.log(data);

  return (
    <>
      <Background>
        <Card>
          <Title>Take a look at my work</Title>
          <Grid>
            {data.map((el) => {
              return (
                <LinkTo
                  href={el.link}
                  key={el.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WorkContainer key={el.id}>
                    <WorkImage
                      src={`/workImg/${el.image}.jpg`}
                      alt={`Screenshot of ${el.title}`}
                      height={280}
                      width={637}
                    />
                    <WorkItem>{el.title}</WorkItem>
                    <WorkDescription>
                      {el.description}
                    </WorkDescription>
                  </WorkContainer>
                </LinkTo>
              );
            })}
          </Grid>
          <Contact>
            <Link href="/pricing">
              <ContactBtn>Ready to get started?</ContactBtn>
            </Link>
          </Contact>
        </Card>
      </Background>
    </>
  );
};

export default WorkInfo;
