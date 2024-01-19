import { CaptureEventHandlers, ReactGridProps } from "../types/PublicModel";

const pickCaptureEventHandlersFromRGProps = (props: ReactGridProps): CaptureEventHandlers => ({
  onAbortCapture: props.onAbortCapture,
  onAnimationEndCapture: props.onAnimationEndCapture,
  onAnimationIterationCapture: props.onAnimationIterationCapture,
  onAnimationStartCapture: props.onAnimationStartCapture,
  onAuxClickCapture: props.onAuxClickCapture,
  onBlurCapture: props.onBlurCapture,
  onBeforeInputCapture: props.onBeforeInputCapture,
  onCanPlayCapture: props.onCanPlayCapture,
  onCanPlayThroughCapture: props.onCanPlayThroughCapture,
  onChangeCapture: props.onChangeCapture,
  onClickCapture: props.onClickCapture,
  onCompositionEndCapture: props.onCompositionEndCapture,
  onCompositionStartCapture: props.onCompositionStartCapture,
  onCompositionUpdateCapture: props.onCompositionUpdateCapture,
  onContextMenuCapture: props.onContextMenuCapture,
  onCopyCapture: props.onCopyCapture,
  onCutCapture: props.onCutCapture,
  onDoubleClickCapture: props.onDoubleClickCapture,
  onDragCapture: props.onDragCapture,
  onDragEndCapture: props.onDragEndCapture,
  onDragEnterCapture: props.onDragEnterCapture,
  onDragExitCapture: props.onDragExitCapture,
  onDragLeaveCapture: props.onDragLeaveCapture,
  onDragOverCapture: props.onDragOverCapture,
  onDragStartCapture: props.onDragStartCapture,
  onDropCapture: props.onDropCapture,
  onDurationChangeCapture: props.onDurationChangeCapture,
  onEmptiedCapture: props.onEmptiedCapture,
  onEncryptedCapture: props.onEncryptedCapture,
  onEndedCapture: props.onEndedCapture,
  onErrorCapture: props.onErrorCapture,
  onFocusCapture: props.onFocusCapture,
  onInputCapture: props.onInputCapture,
  onInvalidCapture: props.onInvalidCapture,
  onKeyDownCapture: props.onKeyDownCapture,
  onKeyPressCapture: props.onKeyPressCapture,
  onKeyUpCapture: props.onKeyUpCapture,
  onLoadCapture: props.onLoadCapture,
  onGotPointerCaptureCapture: props.onGotPointerCaptureCapture,
  onGotPointerCapture: props.onGotPointerCapture,
  onLostPointerCaptureCapture: props.onLostPointerCaptureCapture,
  onLostPointerCapture: props.onLostPointerCapture,
  onLoadStartCapture: props.onLoadStartCapture,
  onLoadedDataCapture: props.onLoadedDataCapture,
  onLoadedMetadataCapture: props.onLoadedMetadataCapture,
  onMouseDownCapture: props.onMouseDownCapture,
  onMouseMoveCapture: props.onMouseMoveCapture,
  onMouseOutCapture: props.onMouseOutCapture,
  onMouseOverCapture: props.onMouseOverCapture,
  onMouseUpCapture: props.onMouseUpCapture,
  onPasteCapture: props.onPasteCapture,
  onPauseCapture: props.onPauseCapture,
  onPlayCapture: props.onPlayCapture,
  onPlayingCapture: props.onPlayingCapture,
  onPointerCancelCapture: props.onPointerCancelCapture,
  onPointerDownCapture: props.onPointerDownCapture,
  onPointerEnterCapture: props.onPointerEnterCapture,
  onPointerLeaveCapture: props.onPointerLeaveCapture,
  onPointerMoveCapture: props.onPointerMoveCapture,
  onPointerOutCapture: props.onPointerOutCapture,
  onPointerOverCapture: props.onPointerOverCapture,
  onPointerUpCapture: props.onPointerUpCapture,
  onProgressCapture: props.onProgressCapture,
  onRateChangeCapture: props.onRateChangeCapture,
  onResetCapture: props.onResetCapture,
  onResizeCapture: props.onResizeCapture,
  onScrollCapture: props.onScrollCapture,
  onSeekedCapture: props.onSeekedCapture,
  onSeekingCapture: props.onSeekingCapture,
  onSelectCapture: props.onSelectCapture,
  onStalledCapture: props.onStalledCapture,
  onSubmitCapture: props.onSubmitCapture,
  onSuspendCapture: props.onSuspendCapture,
  onTimeUpdateCapture: props.onTimeUpdateCapture,
  onTouchCancelCapture: props.onTouchCancelCapture,
  onTouchEndCapture: props.onTouchEndCapture,
  onTouchMoveCapture: props.onTouchMoveCapture,
  onTouchStartCapture: props.onTouchStartCapture,
  onTransitionEndCapture: props.onTransitionEndCapture,
  onVolumeChangeCapture: props.onVolumeChangeCapture,
  onWaitingCapture: props.onWaitingCapture,
  onWheelCapture: props.onWheelCapture,
});

export default pickCaptureEventHandlersFromRGProps;
