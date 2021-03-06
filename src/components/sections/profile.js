import * as React from 'react';
import {motion} from "framer-motion";

function SvgComponent(props) {
  return (
    <svg width={760} height={465} viewBox="0 0 760 465" fill="none" {...props}>
      <g id="prefix__profile">
        <path
          id="prefix__blob"
          d="M598.247 12.12c68.42 19.505 121.985 81.206 146.742 150.471 24.757 69.264 21.156 146.49-27.908 189.084-49.064 42.991-143.14 51.749-209.309 66.876-66.169 15.126-104.429 37.02-148.092 43.389-43.212 6.369-91.826-2.786-162.045-17.117-70.22-13.932-161.596-33.04-188.603-77.226-26.558-44.186 11.253-114.246 38.71-185.899C75.65 109.647 92.755 35.606 143.62 10.925c51.315-24.68 136.389 0 220.112 1.195 84.174 1.592 166.547-19.904 234.516 0z"
          fill="#a9a2ba"
          opacity="0.07"
        />
        <motion.g
            style={{
              originX: "200px",
              originY: "36px"
            }}
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 0,
              rotate: [0, -40]
            }}
            transition={{
              loop:Infinity,
              duration: 5,
              ease: "easeIn"
            }}>
          <path
            id="prefix__music"
            d="M520.318 162.716c-.711-2.976-2.535-4.916-4.296-6.791-1.315-1.399-2.557-2.72-3.292-4.409l-.132-.302c-.436-.993-.927-2.117-.877-2.974.053-.866-.54-1.602-1.322-1.7-.797-.09-1.539.5-1.701 1.356l-5.498 28.99a8.297 8.297 0 00-4.241-2.186c-4.129-.784-8.044 1.497-8.725 5.086-.681 3.589 2.128 7.145 6.257 7.928 4.128.783 8.044-1.498 8.724-5.087l5.38-28.368c.918 1.576 2.096 2.831 3.245 4.053 1.547 1.645 3.009 3.2 3.516 5.322.32 1.325.332 2.706.041 3.877-.714 2.868-2.274 5.592-4.068 7.116-.676.57-.812 1.609-.301 2.319.504.716 1.464.824 2.141.255 2.314-1.958 4.3-5.377 5.18-8.921.434-1.748.423-3.671-.031-5.564z"
            fill="#ffffff"
            opacity="0.7"
          />
        </motion.g>
        <g id="prefix__jacket">
          <path id="prefix__Rectangle_4" fill="#000" d="M314 209h129v205H314z" />
          <ellipse id="prefix__Ellipse_3" cx={378} cy={225} rx={37} ry={27} fill="#60636B" />
          <g id="prefix__left_jacket">
            <path
              id="prefix__Vector_5"
              d="M332.017 201.02c40-4.4 37.666 6.5 31.5 12.5l-26 5.5c-6.5 1.166-15.6 8.9 0 30.5 14.484 20.055 15.487 59.479 13.98 80.49a24.574 24.574 0 01-.388 4.51c.141-1.383.272-2.892.388-4.51-.021-8.558-3.916-18.818-9.799-29.49 7.744-5.6 2.273-20.334-4.181-35-6.454-14.667-29-35.5-14.5-46.5s8.969-16.5 9-18z"
              fill="#7E5EA7"
            />
            <motion.g
              animate={{
                scale: [1,0.96,1]
              }}
              transition={{
                loop:Infinity,
                duration: 2.5
              }}>
              <path
                id="prefix__left_shoulder"
                d="M230.875 367.837c-8.298 25.566 45.09 56.34 47.048 63.163 8.673-57.512 70.723-52.462 74.751-82.875 1.447-10.92-2.059-25.008-7.898-39.771-10.424-26.353-28.283-54.86-38.683-71.354-58.701 0-72.56 122.649-75.218 130.837z"
                fill="#A57AD9"
              />
            </motion.g>
            <path
              id="prefix__Vector_4"
              d="M333.52 201c-40 4.4-40.939 27.5-36.408 38.5 12.392 14.101 33.67 38.471 46.089 61 7.745-5.6 2.273-20.333-4.181-35-6.454-14.667-29-35.5-14.5-46.5s8.969-16.5 9-18z"
              fill="#B690CE"
            />
          </g>
          <g id="prefix__right_jacket">
            <path
              id="prefix__Vector_5_2"
              d="M426.983 201.02c-40-4.4-37.666 6.5-31.5 12.5l26 5.5c6.5 1.166 15.6 8.9 0 30.5-14.484 20.055-15.487 59.479-13.98 80.49a24.574 24.574 0 00.388 4.51 151.396 151.396 0 01-.388-4.51c.021-8.558 3.916-18.818 9.799-29.49-7.744-5.6-2.273-20.334 4.181-35 6.454-14.667 29-35.5 14.5-46.5s-8.969-16.5-9-18z"
              fill="#7E5EA7"
            />
            <motion.g
              animate={{
                scale: [1,0.96,1]
              }}
              transition={{
                loop:Infinity,
                duration: 2.5,
                delay: 1
              }}>
              <path
                id="prefix__right_shoulder"
                d="M528.125 367.837c8.298 25.566-45.09 56.34-47.048 63.163-8.673-57.512-70.723-52.462-74.751-82.875-1.447-10.92 2.059-25.008 7.898-39.771 10.424-26.353 28.283-54.86 38.683-71.354 58.701 0 72.56 122.649 75.218 130.837z"
                fill="#A57AD9"
              />
            </motion.g>
            <path
              id="prefix__Vector_4_2"
              d="M425.48 201c40 4.4 40.939 27.5 36.408 38.5-12.392 14.101-33.67 38.471-46.089 61-7.745-5.6-2.273-20.333 4.181-35 6.454-14.667 29-35.5 14.5-46.5s-8.969-16.5-9-18z"
              fill="#B690CE"
            />
          </g>
        </g>
        <path
          id="prefix__neck"
          d="M409.5 198c-18.8 17.2-48.167 7.167-59.5 0 .5 10.333 1.3 31.4 6.5 33 6.667 7.167 25.1 17.2 45.5 0 4.8-11.6 7.667-26.833 7.5-33z"
          fill="#E2A59F"
          stroke="#E2A59F"
        />
        <g id="prefix__head">
          <motion.g
            style={{
              originX: "380px",
              originY: "234px"
            }}
            animate={{
              rotate: [-3,3,-3]
            }}
            transition={{
              loop:Infinity,
              duration: 3
            }}>
            <g id="prefix__headphones" fill="#666666">
              <path
                id="prefix__Ellipse_6"
                d="M467 124c-35.16 33-40.071 88-89.5 88s-49.66-59.5-89.5-88c0-48.601 40.071-88 89.5-88S467 75.399 467 124z"
              />
              <ellipse id="prefix__Ellipse_4" cx={302} cy={140} rx={22} ry={27} />
              <ellipse id="prefix__Ellipse_5" cx={449} cy={140} rx={22} ry={27} />
            </g>
            <path
              id="prefix__hair-1"
              d="M378.377 208.848c45.495 0 82.377-37.127 82.377-82.924 0-45.798-36.882-82.924-82.377-82.924C332.881 43 296 80.126 296 125.924c0 45.797 36.881 82.924 82.377 82.924z"
              fill="#000"
            />
            <path
              id="prefix__hair-2"
              d="M316.971 82.552c14.194-16.07 34.035-25.959 55.335-27.581 21.301-1.622 42.394 5.15 58.829 18.886-.674-.645-1.341-1.294-2.041-1.92-16.329-14.607-37.753-22.086-59.559-20.793-21.807 1.292-42.211 11.25-56.724 27.685-14.514 16.434-21.949 37.999-20.67 59.95 1.28 21.952 11.168 42.494 27.49 57.107.7.627 1.419 1.217 2.134 1.815-15.477-14.821-21.37-37.437-22.265-58.922-.895-21.484 3.28-40.155 17.471-56.227z"
              fill="#000"
            />
            <path
              id="prefix__face"
              d="M446 149c0 37.555-29.549 68-66 68s-66-30.445-66-68 29.549-68 66-68 66 30.445 66 68z"
              fill="#F8C6AD"
            />
            <path
              id="prefix__bangs"
              d="M316 72v48h16.801l21.381-15.158L351.319 120h74.263L421 104.842 430.164 120H442V72H316z"
              fill="#000"
            />
            <path
              id="prefix__glasses"
              d="M340.639 135.083a139.823 139.823 0 0122.133 2.397c5.18.986 10.37 1.899 15.697 1.944 4.985.043 9.901-.546 14.797-1.303 5.747-.889 11.458-1.963 17.243-2.659a64.375 64.375 0 0115.478.01c5.161.624 10.24 1.533 15.263 2.734.976.233 2.007.278 2.997.472 1.391.272 1.887.855 1.723 2.104-.144 1.09-.11 2.165.003 3.252.096.92-.114 1.681-1.218 2.17-1.22.54-1.948 1.561-2.547 2.624-1.159 2.054-1.711 4.287-2.407 6.477-.639 2.009-1.207 4.038-2.015 6.003-2.242 5.447-6.538 9.129-12.671 10.974-8.136 2.449-16.243 2.135-24.125-.957-5.947-2.333-9.794-6.482-12.432-11.62-1.116-2.174-1.927-4.445-2.825-6.689-.452-1.128-.987-2.216-1.804-3.182-.735-.87-1.663-1.383-2.938-1.396-1.203-.013-2.403-.149-3.61.014-.979.133-1.711.546-2.225 1.294-.769 1.119-1.283 2.337-1.63 3.594-1.267 4.591-3.71 8.64-6.978 12.351-3.744 4.251-8.574 6.902-14.568 7.786-6.539.965-13 .626-19.312-1.276-1.164-.351-2.275-.815-3.376-1.3-2.911-1.282-4.974-3.238-6.291-5.882-2.146-4.309-4.099-8.673-5.374-13.253-.489-1.753-1.416-3.25-2.937-4.484-1.189-.964-2.272-2.032-2.559-3.524-.196-1.017-.125-2.046-.083-3.068.019-.46.055-.92.013-1.377-.041-.445.146-.64.646-.701 4.005-.496 7.928-1.365 11.892-2.046 3.992-.687 8.004-1.265 12.069-1.473 1.319-.067 2.647-.01 3.971-.01zm72.687 2.49c-4.725.053-8.865.339-12.928 1.229-2.966.65-5.882 1.417-8.484 2.898-2.203 1.254-3.777 2.911-4.138 5.284-.214 1.402-.08 2.807.319 4.171 1.303 4.455 3.41 8.602 6.507 12.298 2.902 3.462 6.752 5.832 11.486 6.957 5.857 1.392 11.736 1.348 17.583-.064 5.165-1.248 8.72-4.104 10.649-8.535.569-1.308 1.026-2.646 1.446-3.996 1.152-3.703 1.975-7.446 1.77-11.315-.122-2.288-1.267-4.074-3.394-5.371-1.318-.804-2.777-1.344-4.315-1.7-5.59-1.297-11.305-1.707-16.501-1.856zm-65.418.006c-4.739.155-7.901.32-11.054.612-3.011.278-6.003.633-8.88 1.528-4.685 1.457-6.581 3.806-6.531 8.188.059 5.068 1.472 9.886 3.633 14.538 1.946 4.192 5.522 6.798 10.434 7.983 4.39 1.059 8.855 1.28 13.357.751 5.363-.631 10.058-2.51 13.894-5.956 1.834-1.647 3.152-3.591 4.312-5.637 1.76-3.105 3.471-6.237 4.101-9.704.623-3.438-.631-6.219-4.003-8.155a17.58 17.58 0 00-2.75-1.293c-5.796-2.104-11.848-2.924-16.513-2.855z"
              fill="#000"
            />
            <g id="prefix__eyes" fill="#000">
              <motion.g 
                animate={{
                  scaleY:[1, 0.1, 1]
                }}
                transition={{
                  duration: 0.25,
                  loop: Infinity,
                  repeatDelay: 4
                }}
              >
                <ellipse
                  id="prefix__Ellipse_1"
                  cx={349.402}
                  cy={157.905}
                  rx={5.5}
                  ry={9}
                  transform="rotate(.201 349.402 157.905)"
                />
                <ellipse
                  id="prefix__Ellipse_2"
                  cx={411.401}
                  cy={158.123}
                  rx={5.5}
                  ry={9}
                  transform="rotate(.201 411.401 158.123)"
                />
              </motion.g>
            </g>
          </motion.g>
        </g>
        <g id="prefix__laptop">
          <g id="prefix__Group_3">
            <g id="prefix__Group_2">
              <g id="prefix__Group_1" fill="#2E3640">
                <path
                  id="prefix__laptop_2"
                  d="M236.406 279.402c-.845-6.577 4.279-12.402 10.911-12.402h264.234c6.687 0 11.827 5.916 10.893 12.537l-12.701 90.003-7.409 60.548a11.002 11.002 0 01-10.919 9.664H266.652a11 11 0 01-10.911-9.605l-8.268-64.648-11.067-86.097z"
                />
                <rect
                  id="prefix__Rectangle_1"
                  x={240.238}
                  y={431.017}
                  width={278.548}
                  height={16.499}
                  rx={8.249}
                />
              </g>
              <path
                id="prefix__Vector_1"
                d="M513.36 278.646C448.607 402.484 316.658 404.328 258.778 389.77c-2.864-29.439-13.113-100.707-13.113-111.124H513.36z"
                fill="#3C4050"
                stroke="#3C4050"
              />
            </g>
            <g id="prefix__Vector_2">
              <path
                d="M368.39 353.376l-3.241 13.526c-3.426 8.354 2.014 17.213 13.911 16.522 11.897.691 17.337-8.168 13.912-16.522l-3.242-13.526-6.483 9.222h-8.374l-6.483-9.222z"
                fill="#FAFAFA"
              />
              <path
                d="M382.977 382.888c-14.587 3.074-21.61-6.763-17.828-15.986l3.241-13.526 6.483 9.222h8.374l6.483-9.222 3.242 13.526c3.781 9.223-3.242 19.06-17.829 15.986"
                stroke="#FAFAFA"
              />
            </g>
          </g>
          <path
            id="prefix__Rectangle_2"
            d="M129.05 450.843c.028-6.125 5.016-11.066 11.142-11.035l478.717 2.414c6.125.031 11.068 5.022 11.041 11.147-.028 6.126-5.016 11.067-11.142 11.036l-478.717-2.415c-6.125-.031-11.068-5.021-11.041-11.147z"
            fill="#C09070"
          />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_b"
          x={362.138}
          y={350.682}
          width={33.844}
          height={34.78}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={0.75} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;

