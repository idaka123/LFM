import styled from "styled-components";

export const KnowLedgeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%; 
  user-select: none; 
`;

export const KnowLedgeBlockStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: white;
  display: grid;
  grid-template: 2% 90% / 3% 69% 25%;
`;

export const QuoteBlock = styled.div`
  height: 100%;
  grid-area: 2/3/3/4;
  display: flex;
  flex-direction: column;
`;

export const CommunityBlockTitle = styled.div`
  height: 10%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    font-size: calc((4vw + 4vh)/2);
    color: black;
  }
`;

export const CommunityBlockContent = styled.div`
  overflow: hidden;
  height: 15%;
  color: #404040;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: start;
  blockquote {
    padding: calc((1.3vw + 1.5vh)/2);
    font-size: calc((1.16vw + 1.5vh)/2);
    &:hover {
  
    }
  }
  cite {
    font-size: calc((1.16vw + 1.5vh)/2);
    color: #9b9a9a;
  }
  margin-bottom: 4%;
`;

export const TipTitle = styled.div`
  height: 11%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);
  }
`;

export const TipBlock = styled.div`
  height: 38.65%;
  overflow: hidden;
  display: grid;
  grid-template: 100% / 50% 50%;
  border: 1.5px solid #000;
  border-radius: calc((1.5vw + 1.5vh)/2);
  background-color: white;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  &:hover {

    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  }
`;

export const TipParagraph = styled.div`
  background-color: white;
  grid-area: 1/1/2/2;
  padding: calc((1.3vw + 1.5vh)/2);
  b {
    font-size: calc((1.16vw + 1.5vh)/2);
    color: black;
  }
  p {
    font-size: calc((1.16vw + 1.5vh)/2);
  }
  cite {
    font-size: calc((1.16vw + 1.5vh)/2);
  }
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: hidden;
  height: 90%;
`;

export const TipImage = styled.div`
  background-color: white;
  img {
    height: 80%;
    width: 80%;
    border-radius: calc((1.5vw + 1.5vh)/2);
    box-shadow: 0 5px 10px rgba(0,0,0,1);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/2/2/3;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const WisdomBlockTitle = styled.div`
  height: 9.5%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);
  }
`;

export const WisdomBlockContent = styled.div`
  height: 10%;
  blockquote {
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: calc((1.5vw + 1.5vh)/2);
    font-size: calc((1.16vw + 1.5vh)/2);
    color: #625d5d;
  }
  cite {
    font-size: calc((1.25vw + 1vh)/2);
    color: #9b9a9a;
  }
  margin-bottom: 2%;
`;

export const PodcastBlock = styled.div`
  grid-area: 2/2/3/3;
  height: 95%;
`;

export const PodcastBlockTitle = styled.div`
  height: 9%;
  letter-spacing: calc((.1vw+.1vh)/2);
  b {
    color: black;
    font-size: calc((4vw + 4vh)/2);

  }
`;

export const StyledPodcastCard = styled.div`
  position: relative;
  display: grid;
  grid-template: 50% 50% / 4% 9% 72% auto;
  background-color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  padding-right: calc((0.7vw + 0.7vh)/2);
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  width: 100%;
  height: 16%;
  margin-bottom: calc((0.7vw + 0.7vh)/2);
  font-weight: 700;
  transition: background-color 0.5s ease; 
  z-index: 0;
  &:hover{
    z-index: 1; 
    background-color: black;
    }
`;

export const PodcastCardId = styled.p`
  grid-area: 1/1/3/2;
  font-size: calc((1.75vw + 1.75vh)/2);
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const PodcastCardList = styled.div`
  position: relative;
  grid-area: 3/1/4/2;
  height: 100%;
  width: 100%;
  border-radius: calc((2vw + 2vh)/2);
  border: 2px solid #cbcbcb;
  padding: calc((1vw + 1vh)/2);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const PodcastEmptyList = styled.p`
  position: relative;
  grid-area: 3/1/4/2;
  height: 100%;
  width: 100%;
  border-radius: calc((2vw + 2vh)/2);
  font-size: calc((1.75vw + 1.75vh)/2);
  border: 2px solid #cbcbcb;
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-style: italic;
  font-weight: bold;
`

export const PodcastThumbnails = styled.div`
  grid-area: 1/2/3/3;
  img {
    height: calc((5vh + 5vw)/2);
    width: calc((5vh + 5vw)/2);
    border-radius: calc((0.7vw + 0.7vh)/2);
  }
  svg {
    font-size: calc((5vw + 5vh)/2);
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  &:hover {
    cursor: pointer;
  }
`;

export const PodcastTitle = styled.div`
  grid-area: 1/3/2/4;
  color: black;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: calc((1.3vw + 1.3vh)/2);
    cursor: pointer;
  }
  width: 100%;
`;

export const PodcastLength = styled.p`
  grid-area: 2/3/3/4;
  font-size: calc((1.25vw + 1.25vh)/2);
  display: flex;
  color: gray;
  justify-content: start;
  align-items: flex-start;
  overflow: hidden;
  &:hover{
    cursor: pointer;
  }
`;

export const PodcastOption = styled.div`
  grid-area: 1/4/3/5;
  display: grid;
  grid-template: 100% / 1fr 1fr 1fr;
`;

export const PodcastMore = styled.div`
  grid-area: 1/3/2/4;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size:  calc((2.25vw + 2.25vh)/2);
    color: black;
    &:hover{
      cursor: pointer;
      color: rgb(30,215,96);
    }
  }
`;

export const PodcastDownload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/1/2/2;
  svg{
    font-size: calc((2.25vw + 2.25vh)/2);
    color: black;
    &:hover{
      cursor: pointer;
    }
  }
`

export const PodcastAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1/2/2/3;
  svg{
    font-size:  calc((2.25vw + 2.25vh)/2);
    &:hover{
      cursor: pointer;
    }
  }
  .iconLove {
    color: black;
  }
  .iconCheck{
    color: rgb(30,215,96);
  }
`;

export const StyledPodcastCardMore = styled.div`
  --animate-duration: 0.2s;
  position: absolute; 
  right: calc((0.5vw + 0.5vh)/2);
  width: calc((20vw + 20vh)/2);
  height: calc((22vw + 22vh)/2);
  background-color: rgb(40,40,40);
  z-index: 4;
  display: flex; 
  padding: 0.75%;
  flex-direction: column;
  justify-content: space-around; 
  border-radius: calc((0.5vw + 0.5vh)/2); 
  p{
    color: rgb(234,234,234);
    font-size:  calc((1.25vw + 1.25vh)/2);
  }
  svg{
    color: rgb(234,234,234);
    font-size:  calc((1.75vw + 1.75vh)/2);
  }
  .moreOption{
    height: 25%;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    border-radius: calc((0.2vw + 0.2vh)/2); 
    padding: 5%;
    transition: all 0.3s ease; 
    &:hover{
      background-color: rgb(62,62,62);
      cursor: pointer;
    }
  }
  .addToPlaylist{
  }
  .addToQueue{
  }
  .download{
  }
  .share{
    border-top: 2px solid rgb(75,75,75);
  }

  .playlistList{
    height: 100%; 
    width: 100%;
    padding: 0.75%;
    margin-bottom: 2%;
    display:flex; 
    flex-direction: column;
    .playlistListTitle{
      border-bottom: 2px solid rgb(75,75,75);
      height: auto;
      .backToMoreButton{
        height: calc((3vw + 3vh)/2);
        display: flex; 
        align-items: center;
        svg{
          color: rgb(234,234,234);
          font-size: calc((1.5vw + 1.5vh)/2);
          &:hover{
            cursor: pointer;
          }
        }
      }
      .findPlaylistInput{
        height: calc((2.5vw + 2.5vh)/2);
        display: flex; 
        align-items: center;
        background-color: rgb(62,62,62);
        border-radius: calc((0.2vw + 0.2vh)/2); 
        padding-left: 5%;
        svg{
          font-size:  calc((1.5vw + 1.5vh)/2);
          margin-right: 3%;
        }
        input{
          border: none;
          outline: none;
          color: rgb(234,234,234);
          font-size:  calc((1.25vw + 1.25vh)/2);
          height: 100%; 
          width: 100%; 
          background-color: rgb(62,62,62);
        }
      }
      .playlistCreate{
        margin-top : 1%;
        height: calc((3vw + 3vh)/2);
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        border-radius: calc((0.2vw + 0.2vh)/2); 
        padding: 5%;
        transition: all 0.3s ease; 
        &:hover{
          background-color: rgb(62,62,62);
          cursor: pointer;
        }
      }
      .createInput{
        border-radius: calc((0.2vw + 0.2vh)/2); 
        margin-top: 1%;
        height: calc((2.25vw + 2.25vh)/2);
        display: flex; 
        align-items: center;
        justify-content: space-between;
        background-color: rgb(62,62,62);
        input{
          border: none;
          outline: none;
          height: 100%; 
          width: 100%;
          color: rgb(234,234,234);
          font-size:  calc((1.25vw + 1.25vh)/2);
          background-color: rgb(62,62,62);
          padding-left: 3%;
        }
        svg{
          font-size:  calc((1.5vw + 1.5vh)/2);
          margin-right: 3%;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .playlistListContent{
      flex-grow: 1; 
      padding-right: 2%;
      margin-top: 2%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgb(35, 35, 35);
        border-radius: 100px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 100px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      .listName{
        border-radius: calc((0.2vw + 0.2vh)/2); 
        margin-top: 2%;
        padding-left: 7%;
        height: calc((2.75vw + 2.75vh)/2);
        display: flex; 
        align-items: center;
        transition: all 0.3s ease; 
        &:hover{
          cursor: pointer;
       
          background-color: rgb(62,62,62);
        }
      }
    }
  }
`

export const StyledPodcastList = styled.div`
  height: 94%;
  width: 93%;
  display: grid;
  grid-template: 9% 5.5% auto / 100%;
  z-index: 0;
`;

export const PodcastListType = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const PodcastArrange = styled.div`
  position: relative;
  grid-area: 2/1/3/2;
  display: grid;
  grid-template: 100% / 5% 45% 48% 2%;
`;

export const PodcastArrangeTitleIcon = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .iconList {
    font-size: calc((1.5vw + 1.5vh)/2);
    color: black;
  }
  height: 90%;
  &:hover{
    cursor: pointer;
  }
`;

export const PodcastArrangeTitle = styled.p`
  grid-area: 1/2/2/3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: calc((1.2vw + 1.2vh)/2);
  color: black;
  font-weight: 700;
  &:hover{
    cursor: pointer;
  }
`;

export const SortBy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: 1/3/2/4;
  p{
    font-size: calc((1.25vw + 1.25vh)/2);
    font-weight: bold;
    color: black;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SortByIcon = styled.div`
  grid-area: 1/4/2/5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  .iconArrowDown {
    font-size: calc((1.18vw + 1.vh)/2);
  }
`;

export const PodcastArrangeList = styled.ul`
  --animate-duration: 0.2s;
  background-color: black;
  position: absolute;
  top: calc((2.6vw + 2.6vh)/2);
  right: 0;
  z-index: 4;
  list-style: none;
  border-radius: calc((1.5vw + 1.5vh)/2);
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
`;

export const PodcastArrangeListElement = styled.li`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc((1vw + 1.5vh)/2);
  color: white;
  border-radius: calc((1.5vw + 1.5vh)/2);
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  padding-top: calc((1vw + 1vh)/2);
  padding-bottom: calc((1vw + 1vh)/2);
  padding-left: calc((2vw + 2vh)/2);
  padding-right: calc((2vw + 2vh)/2);
`;

export const PodcastListTypeElement = styled.p`
  height: 70%;
  width: auto;
  min-width: 10.5%;
  max-width: 15%;
  width: auto; 
  border-radius: calc((1.5vw + 1.5vh)/2);
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.1%;
  margin-right: 1.1%;
  transform-origin: center;
  font-size: calc((1.3vw + 1.3vh)/2);
  letter-spacing: calc((0.05vw + 0.05vh)/2);
  transition: transform 0.3s ease; 
  &:hover {
    transition: color 0.3s ease;
    color: rgb(4 228 84);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const PodcastShareStyled = styled.div`
  --animate-duration: 0.2s;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const PodcastShareBlock = styled.div`
  width: calc((48vw + 48vh)/2);
  height: calc((43vw + 43vh)/2);
  display: grid;
  grid-template: 
    8% auto 5% 11% 11% /
    100%;
  gap: calc((0.5vw + 0.5vh)/2);
  background: linear-gradient(to bottom, rgb(61,61,58), rgb(18,18,18));
  padding: 1% 1.5%;
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 10px 10px 20px rgb(61 59 59 / 71%);
`;

export const PodcastShareBlockTitle = styled.div`
  grid-area: 1/1/2/2;
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  color: rgb(255,255,255);

  p {
    font-size: calc((1.5vw + 1.5vh)/2);
    font-weight: bold;

  }

  .shareBlockIcon {
    display: flex; 
    justify-content: center; 
    align-items: center;
    background-color: white; 
    border-radius: 50%;
    padding: 1%;

    .blockIconX {
      font-size: calc((1vw + 1vh)/2);
      transform-origin: center;
      color: black;
    }

    &:hover {
      .blockIconX{
        color: red;
      }
      color: red;
      cursor: pointer;
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
`;

export const PodcastShareBlockContent = styled.div`
  grid-area: 2/1/2/2;
  background: linear-gradient(to bottom, rgb(160,160,152), rgb(82,82,77));
  border-radius: calc((1.5vw + 1.5vh)/2);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 1);
  display: grid; 
  grid-template: 100% / 50% 50%;
  width: 100%; 
  height: 100%;

  .blockContentImage {
    grid-area: 1/1/2/2;
    display: flex; 
    justify-content: center; 
    align-items: center;

    img {
      width: calc((18vw + 18vh)/2);
      height: calc((18vw + 18vh)/2);
      border-radius: calc((2.5vw + 2.5vh)/2);
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  
    }
  }

  .blockContentInfoContainer {
    grid-area: 1/2/2/3;
    display: flex;
    justify-content: center; 
    align-items: center;
    color: black;
    margin-right: 5%;
    color: white; 

    .blockContentInfo {
      width: 100%;
      height: calc((18vw + 18vh)/2);
      
      .contentInfoTitle {
        height: 41%;
        display: flex; 
        align-items: end;
        font-weight: bold;
        overflow: hidden;

        p {
          font-size: calc((2.25vw + 2.25vh)/2);
          white-space: nowrap;
      
          width: max-content; 
        }

        @keyframes slide {
          -100% { transform: translateX(100%);}
          100% { transform: translateX(-100%);}
        }

        .running-text {
          animation: slide 90s linear infinite;
        } 

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .contentInfoAuthor {
        height: 14.5%;
        font-size: calc((1.5vw + 1.5vh)/2);
/*         color: #000000bf; */
        font-weight: bold;
    
      }

      .contentInfoLength {
        height: 14.5%;
        font-size: calc((1.25vw + 1.25vh)/2);
/*         color: #000000bf; */
        font-weight: bold;
    
      }

      .contentInfoButton {
        height: 30%;
        display: flex; 
        justify-content: end;
        align-items: end; 
        
        p {
          background-color: white; 
          color:  #000000bf;;
          font-weight: bold;
          height: calc((3vw + 3vh)/2);
          width: calc((8.75vw + 8.75vh)/2);
          border-radius: calc((1.1vw + 1.1vh)/2);
          display: flex; ;
          justify-content: center; 
          align-items: center;
          font-size: calc((1vw + 1vh)/2);
          transform-origin: center;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
          
          &:hover {
            transition: all 0.3s ease;
            transform: scale(1.05);
            color: black;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const PodcastShareSendto = styled.p`
  grid-area: 3/1/4/2;
  width: 100%; 
  height: 100%;
  color: rgb(163,163,163); 
  font-size: calc((1vw + 1vh)/2);
  font-weight: bold;
  display: flex;
  align-items: flex-end;
`;

export const PodcastShareBlockSocial = styled.div`
  grid-area: 4/1/5/2;
  display: flex; 
  justify-content: flex-start;
  align-items: flex-start;
  
  .blockSocial {
    width: calc((3.15vw + 3.15vh)/2);
    height: calc((3.15vw + 3.15vh)/2);
    margin-right: 1.2%;
    margin-left: 1.2%;
    transform-origin: center;
    
    &:hover{
      cursor: pointer;
      transition: all 0.3s ease;
      transform: scale(1.2);
    }

  }
`;

export const PodcastShareCopyButton = styled.div`
  grid-area: 5/1/6/2;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  background-color: #212121; 
  border-radius: calc((1.5vw + 1.5vh)/2);
  
  p {
    width: 85%; 
    line-height: 100%;
    padding-left: 3%;
    font-size: calc((1.5vw + 1.5vh)/2);
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    width: calc((4.5vw + 4.5vh)/2);
    height: calc((2.3vw + 2.3vh)/2);
    font-size: calc((0.75vw + 0.75vh)/2);
    font-weight: bold;
    border-radius: calc((1vw + 1vh)/2);
    border: none;
    background-color: rgb(30,215,96); 
    transition: all 0.1s ease;
    transform-origin: center;
    
    &:hover{
      cursor: pointer;
      transform: scale(1.05);
    }
    margin-right: 1%;
  }
`;

export const PodcastInfoStyled = styled.div`
  --animate-duration: 0.2s;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const PodcastInfoBlock = styled.div`
  height: 75%; 
  width: 55%; 
  display: grid; 
  grid-template: 35% 65% / 100%;  
  border-radius: calc((1vw + 1vh)/2);
  position: relative;
  .closeButton{
    background-color: white; 
    width: calc((2vw + 2vh)/2);
    height: calc((2vw + 2vh)/2);
    display: flex; 
    justify-content: center; 
    align-items: center;
    position: absolute; 
    top: calc((1.5vw + 1.5vh)/2);
    right: calc((1.5vw + 1.5vh)/2);
    border-radius: 50%;
    transform-origin: center;
    .close{
      font-size: calc((1vw + 1vh)/2);
      color: black;
      transform-origin: center;
    }
    &:hover{
      transform: scale(1.1);
      cursor: pointer; 
      transition: all 0.3s ease;
      .close{
        color: red;
      }
    }
  }
`
export const PodcastInfoBlockTitle = styled.div`
  grid-area: 1/1/2/2;
  display: grid; 
  grid-template: 100%/ 25% 75%;
  padding-bottom: 2%;
  padding-right: 2%;
  background: linear-gradient(to bottom, rgb(160,160,152), rgb(82,82,77));
  border-top-left-radius: calc((1vw + 1vh)/2);
  border-top-right-radius: calc((1vw + 1vh)/2); 
  .infoThumbnail{
    grid-area: 1/1/2/2;
    display: flex; 
    justify-content: center; 
    align-items: end; 
    img{
      width: calc((12.75vw + 12.75vh)/2);
      height: calc((12.75vw + 12.75vh)/2); 
      border-radius: calc((1vw + 1vh)/2);
    }
  }
  .infoTitle{
    grid-area: 1/2/2/3;
    display: flex; 
    flex-direction: column;
    justify-content: end; 
    .title{
    font-size: calc((2vw + 2vh)/2);
    font-weight: bold; 
    color: white;
    }
    .author{
    font-size: calc((1.5vw + 1.5vh)/2);
    color: white;
    font-weight: bold; 
    }
  }
 `
export const PodcastInfoBlockDescription = styled.div`
 grid-area: 2/1/3/2;
 background: linear-gradient(to bottom, rgb(61,61,58), rgb(18,18,18));
 padding-top: 2%;
 padding-bottom: 4%;
 padding-left: 2%;
 padding-right: 2%;
 display: grid; 
 grid-template: 8% 15% 12% 65% / 100%;
 border-bottom-left-radius: calc((1vw + 1vh)/2);
 border-bottom-right-radius: calc((1vw + 1vh)/2);
 
 .dateAndTime {
   grid-area: 1/1/2/2;
   display: flex; 
   
   .date {
     font-size: calc((1.25vw + 1.25vh)/2);
     color: rgb(193,193,193);
   }
   
   .dot {
     color: transparent;
   }
   
   .time {
     font-size: calc((1.25vw + 1.25vh)/2);
     color: rgb(193,193,193);
   }
   
 
 }
 
 .descriptionButton {
   grid-area: 2/1/3/2;
   display: flex; 
   align-items: center;
   
   .playButton {
     width: calc((4vw + 4vh)/2);
     height: calc((4vw + 4vh)/2); 
     padding-left: calc((0.25vw + 0.25vh)/2);
     background-color: white; 
     display: flex; 
     justify-content: center; 
     align-items: center; 
     border-radius: 50%;
     transform-origin: center;
     margin-right: calc((1.25vw + 1.25vh)/2);
     
     .play {
       font-size: calc((3vw + 3vh)/2);
       color: black;
     }

     .pause{
       font-size: calc((3vw + 3vh)/2);
       color: black;
     }
     
     &:hover {
       cursor: pointer;
       transform: scale(1.1);
       transition: all 0.3s ease; 
     }
   }
   
   .downloadButton {
     width: calc((2vw + 2vh)/2);
     height: calc((2vw + 2vh)/2);
     border: 2.5px solid rgb(167,167,167);
     border-radius: 50%;
     display: flex; 
     justify-content: center; 
     align-items: center;
     transform-origin: center;
     margin-right: calc((1.25vw + 1.25vh)/2);
     
     .download {
       font-size: calc((1vw + 1vh)/2);
       color: rgb(167,167,167);
     }
     
     &:hover {
       transition: all 0.3s ease;     
       cursor: pointer;
       transform: scale(1.1);
       border-color: white;
       .download{
        color: white;
       }
     }
   }

   .loveButton{
    width: calc((2vw + 2vh)/2);
    height: calc((2vw + 2vh)/2);
    border: 2.5px solid rgb(167,167,167);
    border-radius: 50%;
    display: flex; 
    justify-content: center; 
    align-items: center;
    transform-origin: center;
  
    .love{
      font-size: calc((1.25vw + 1.25vh)/2);
      color: rgb(167,167,167);
    }

    .unLove{
      font-size: calc((1.25vw + 1.25vh)/2);
      color: rgb(30,215,96);
    }

    &:hover{
      transition: all 0.3s ease;     
      cursor: pointer;
      transform: scale(1.1);
      border-color: white;
      .love{
        color: white;
      }
      .unLove{
        color: rgb(30,215,96);
      }
    }
   }
 }
 .descriptionTitle{
  grid-area: 3/1/4/2;
  display: flex; 
  align-items: end; 
  margin-bottom: calc((1vw + 1vh)/2);
  p{
    color: white; 
    font-size: calc((1.25vw + 1.25vh)/2);
    font-weight: bold;
    border-bottom: 3px solid rgb(30,215,96);

  }
 }
 .descriptionContent{
  grid-area: 4/1/5/2;
  padding-left: 1%;
  padding-right: 2%;
  white-space: normal;
  p{
    width: 100%; 
    text-align: justify;
    color: rgb(174,174,174);
    font-size: calc((1.3vw + 1.3vh)/2);

    line-height: calc((2.25vw + 2.25vh)/2);
    white-space: normal;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgb(35, 35, 35);
    border-radius: 100px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 100px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
 }
`
export const StyledPodcastPlaylist = styled.div`
 position: absolute; 
 top: 0; 
 left: 0; 
 width: 100%; 
 height: 100%; 
 padding-left: 2%;
 padding-right: 2%;
 padding-top: 1%; 
 z-index: 6; 
 background-color: white ;
 user-select: none; 
`
export const PodcastPlaylistBackButton = styled.div`
 display: flex; 
 flex-direction: row;
 align-items: center;
 height: 4%; 
 transform-origin: center;
 transition: all 0.3s ease;
 svg{
  color: black;
  font-size: calc((2vw + 2vh)/2);
 }
 p{
  color: black;
  font-size: calc((1.5vw + 1.5vh)/2);
 }
 &:hover{
  transform: scale(1.005);
  svg{
    color: gray;
  }
  p{
    color: gray;
  }
  cursor: pointer;
 }
`
export const PodcastPlaylistTitle = styled.div`
 height: 10%; 
 display: flex; 
 align-items: center;
 justify-content: space-between; 
 .playListTitle{
   display: flex; 
   justify-content: center; 
   p{
    font-size: calc((3vw + 3vh)/2);
    color: black;
    font-weight: bold; 
   }
   .titleIcon{
   display: flex; 
    align-items: center;
    svg{
      font-size: calc((3vw + 3vh)/2);
      color: black;
    }
   }
 }
   .titleSearch{
    width: 15%;  
   height: 50%; 
   border: 2px solid grey; 
   border-radius: calc((3vw + 3vh)/2);
   display: flex; 
   align-items: center;
   justify-content: end; 
  .titleSearchIcon{
    width: 15%; 
    height: 100%;  
    display: flex; 
    justify-content: center; 
    align-items: center; 
    svg{ 
      font-size: calc((1.25vw + 1.25vh)/2);
     }
  }
  input{
    height: 100%;
    width: 85%;
    outline: none; 
    border: none; 
    height: 100%;
    border-top-right-radius: calc((3vw + 3vh)/2);
    border-bottom-right-radius: calc((3vw + 3vh)/2);
    font-size: calc((1.25vw + 1.25vh)/2); 
  }
 }
`
export const PodcastPlaylistType = styled.p`
  height: 6%; 
  display: flex; 
  flex-direction: row;
  font-size: calc((2.5vw + 2.5vh)/2);
  padding-left: 2%; 
  .listTypeIcon{
    display: flex; 
    align-items: center;
    svg{
    font-size: calc((2.5vw + 2.5vh)/2);
    }
  }
`

export const PodcastPlayListContent = styled.div`
padding-left: 2%;   
width: 100%; 

`
export const PodcastPlaylistBlock = styled.div`

`