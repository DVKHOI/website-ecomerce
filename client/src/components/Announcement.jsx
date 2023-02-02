import styled from "styled-components";

const AnnouncementStyless = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.7;
`;

const Announcement = () => {
  return (
    <AnnouncementStyless>
      Super Deal! Free Shipping on Orders Over $50
    </AnnouncementStyless>
  );
};

export default Announcement;
