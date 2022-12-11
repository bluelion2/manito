export default function Snow({ ...props }) {
  return (
    <>
      <div className="snow-wrap" {...props}>
        <div className="snow"></div>
      </div>
      {/* https://codepen.io/keithclark/pen/DjXzBw */}
      <style jsx>
        {`
          .snow-wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(#123 30%, #667);
            overflow: hidden;
          }

          .snow,
          .snow:before,
          .snow::after {
            position: absolute;
            top: -500px;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: radial-gradient(5px 5px at 386px 424px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                3px 3px at 156px 332px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                4px 4px at 336px 466px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 312px 486px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(5px 5px at 66px 35px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 190px 352px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 107px 173px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 433px 120px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(3px 3px at 250px 264px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                5px 5px at 386px 481px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 187px 180px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(6px 6px at 253px 9px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 329px 143px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(6px 6px at 27px 466px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 156px 329px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(4px 4px at 465px 44px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                6px 6px at 418px 204px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 400px 285px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 251px 375px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(3px 3px at 16px 181px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(5px 5px at 7px 328px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                3px 3px at 465px 409px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 346px 437px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 314px 159px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 276px 140px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(4px 4px at 87px 438px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(3px 3px at 28px 314px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(6px 6px at 70px 424px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                3px 3px at 214px 381px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(6px 6px at 195px 81px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(5px 5px at 242px 373px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                6px 6px at 433px 239px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 464px 204px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(6px 6px at 26px 491px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 134px 113px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 280px 253px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 132px 117px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(5px 5px at 185px 90px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(3px 3px at 480px 316px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(4px 4px at 383px 364px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(4px 4px at 226px 61px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                3px 3px at 400px 399px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(3px 3px at 38px 118px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                6px 6px at 392px 408px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 302px 260px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(5px 5px at 30px 149px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(4px 4px at 166px 484px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(5px 5px at 297px 155px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(6px 6px at 132px 198px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(3px 3px at 16px 31px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 159px 244px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                4px 4px at 138px 187px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 298px 471px,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 174px 426px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                4px 4px at 253px 470px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                3px 3px at 311px 102px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                5px 5px at 404px 336px,
                rgba(255, 255, 255, 0.6) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                4px 4px at 157px 175px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(3px 3px at 492px 344px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(3px 3px at 125px 258px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(4px 4px at 191px 180px, white 50%, rgba(0, 0, 0, 0)),
              radial-gradient(
                4px 4px at 482px 357px,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                4px 4px at 165px 154px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                6px 6px at 124px 277px,
                rgba(255, 255, 255, 0.7) 50%,
                rgba(0, 0, 0, 0)
              );
            background-size: 500px 500px;
            animation: snow 3s linear infinite;
            content: '';
          }

          .snow:before {
            animation-duration: 9;
            animation-direction: reverse;
            margin-left: -250px;
            opacity: 0.65;
            filter: blur(1.5px);
          }

          @keyframes snow {
            to {
              transform: translateY(500px);
            }
          }
        `}
      </style>
    </>
  )
}
