import {trigger, state, animate, style, transition} from '@angular/animations';

export function RouterAnimation(duration_enter, duration_leave) {
  return trigger('RouterAnimation', [
    state('void', style({
      position:'absolute',
      width:'100%',
      height:'100%',
      'zIndex':0,
    }) ),
    state('*', style({
      position:'absolute',
      width:'100%',
      height:'100%',
      'zIndex':0,
    }) ),

    transition('* => void', [
      style({transform: 'translateX(0%)', "zIndex":0}),
      animate( duration_enter + ' ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

// export function CallbackRouterAnimation(duration_enter, duration_leave) {
//   return trigger('CallbackRouterAnimation', [
//     state('void', style({
//       position:'absolute',
//       width:'100%',
//       height:'100%',
//       'zIndex':0,
//     }) ),
//     state('*', style({
//       position:'absolute',
//       width:'100%',
//       height:'100%',
//       'zIndex':0,
//     }) ),
//
//     transition('* => void', [
//       style({transform: 'translateX(0%)', "zIndex":0}),
//       animate( duration_enter + ' ease-in-out', style({transform: 'translateY(100%)'}))
//     ])
//   ]);

export function CallbackRouterAnimation(duration_enter, duration_leave) {
  return trigger('CallbackRouterAnimation', [
    state('void', style({
      position:'absolute',
      width:'100%',
      height:'100%',
      'zIndex':1,
    }) ),
    state('*', style({
      position:'absolute',
      width:'100%',
      height:'100%',
      'zIndex':1,
    }) ),

    transition('* => void', [
      style({ opacity: 1 }),
      animate('.5s', style({ opacity: 0 }))
    ])
  ]);


// const slideInOutAnimation =
//    // trigger name for attaching this animation to an element using the [@triggerName] syntax
//    trigger('slideInOutAnimation', [
//
//        // end state styles for route container (host)
//        state('*', style({
//            // the view covers the whole screen with a semi tranparent background
//            position: 'fixed',
//            top: 0,
//            left: 0,
//            right: 0,
//            bottom: 0,
//            backgroundColor: 'rgba(0, 0, 0, 0.8)'
//        })),
//
//        // route 'enter' transition
//        transition(':enter', [
//
//            // styles at start of transition
//            style({
//                // start with the content positioned off the right of the screen,
//                // -400% is required instead of -100% because the negative position adds to the width of the element
//                right: '-400%',
//
//                // start with background opacity set to 0 (invisible)
//                backgroundColor: 'rgba(0, 0, 0, 0)'
//            }),
//
//            // animation and styles at end of transition
//            animate('.5s ease-in-out', style({
//                // transition the right position to 0 which slides the content into view
//                right: 0,
//
//                // transition the background opacity to 0.8 to fade it in
//                backgroundColor: 'rgba(0, 0, 0, 0.8)'
//            }))
//        ]),
//
//        // route 'leave' transition
//        transition(':leave', [
//            // animation and styles at end of transition
//            animate('.5s ease-in-out', style({
//                // transition the right position to -400% which slides the content out of view
//                right: '-400%',
//
//                // transition the background opacity to 0 to fade it out
//                backgroundColor: 'rgba(0, 0, 0, 0)'
//            }))
//        ])
//    ]);
}
